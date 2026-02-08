import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Admin() {
  const [editingService, setEditingService] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const queryClient = useQueryClient();

  const { data: services = [] } = useQuery({
    queryKey: ['admin-services'],
    queryFn: () => base44.entities.Service.list('order'),
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ['admin-testimonials'],
    queryFn: () => base44.entities.Testimonial.list('order'),
  });

  const { data: inquiries = [] } = useQuery({
    queryKey: ['inquiries'],
    queryFn: () => base44.entities.ContactInquiry.list('-created_date'),
  });

  const saveServiceMutation = useMutation({
    mutationFn: (data) => {
      if (data.id) return base44.entities.Service.update(data.id, data);
      return base44.entities.Service.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-services'] });
      queryClient.invalidateQueries({ queryKey: ['services-home'] });
      queryClient.invalidateQueries({ queryKey: ['services'] });
      setEditingService(null);
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: (id) => base44.entities.Service.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-services'] });
      queryClient.invalidateQueries({ queryKey: ['services-home'] });
      queryClient.invalidateQueries({ queryKey: ['services'] });
    },
  });

  const saveTestimonialMutation = useMutation({
    mutationFn: (data) => {
      if (data.id) return base44.entities.Testimonial.update(data.id, data);
      return base44.entities.Testimonial.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      setEditingTestimonial(null);
    },
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: (id) => base44.entities.Testimonial.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
    },
  });

  const updateInquiryMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.ContactInquiry.update(id, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['inquiries'] }),
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-500 mt-2">Manage your website content</p>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="inquiries">Contact Inquiries</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="space-y-6">
              <Button onClick={() => setEditingService({ title: "", description: "", icon: "Stethoscope", color: "teal", order: services.length, show_on_home: true })}>
                <Plus className="w-4 h-4 mr-2" /> Add Service
              </Button>

              <AnimatePresence>
                {editingService && (
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{editingService.id ? 'Edit Service' : 'New Service'}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Title</Label>
                          <Input value={editingService.title} onChange={(e) => setEditingService({ ...editingService, title: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea value={editingService.description} onChange={(e) => setEditingService({ ...editingService, description: e.target.value })} rows={3} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Icon</Label>
                            <Select value={editingService.icon} onValueChange={(v) => setEditingService({ ...editingService, icon: v })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                {["Stethoscope", "HandHelping", "UserCheck", "Utensils", "Compass", "Car", "Home", "GraduationCap", "ArrowRightLeft", "UsersRound", "MapPin"].map(i => (
                                  <SelectItem key={i} value={i}>{i}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Color</Label>
                            <Select value={editingService.color} onValueChange={(v) => setEditingService({ ...editingService, color: v })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="teal">Teal</SelectItem>
                                <SelectItem value="orange">Orange</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Order</Label>
                            <Input type="number" value={editingService.order} onChange={(e) => setEditingService({ ...editingService, order: parseInt(e.target.value) })} />
                          </div>
                          <div className="space-y-2">
                            <Label>Show on Home</Label>
                            <Select value={String(editingService.show_on_home)} onValueChange={(v) => setEditingService({ ...editingService, show_on_home: v === "true" })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="true">Yes</SelectItem>
                                <SelectItem value="false">No</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => saveServiceMutation.mutate(editingService)} disabled={saveServiceMutation.isPending}>
                            <Save className="w-4 h-4 mr-2" /> Save
                          </Button>
                          <Button variant="outline" onClick={() => setEditingService(null)}>
                            <X className="w-4 h-4 mr-2" /> Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((s) => (
                  <Card key={s.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold">{s.title}</h3>
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" onClick={() => setEditingService(s)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" onClick={() => deleteServiceMutation.mutate(s.id)}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{s.description}</p>
                      <div className="flex gap-2 mt-3 text-xs">
                        <span className={`px-2 py-1 rounded ${s.color === 'teal' ? 'bg-teal-100 text-teal-700' : 'bg-orange-100 text-orange-700'}`}>{s.color}</span>
                        <span className="px-2 py-1 rounded bg-gray-100">Order: {s.order}</span>
                        {s.show_on_home && <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">Home</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="space-y-6">
              <Button onClick={() => setEditingTestimonial({ name: "", role: "", text: "", rating: 5, order: testimonials.length, is_active: true })}>
                <Plus className="w-4 h-4 mr-2" /> Add Testimonial
              </Button>

              <AnimatePresence>
                {editingTestimonial && (
                  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{editingTestimonial.id ? 'Edit Testimonial' : 'New Testimonial'}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Name</Label>
                            <Input value={editingTestimonial.name} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label>Role</Label>
                            <Input value={editingTestimonial.role} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Testimonial Text</Label>
                          <Textarea value={editingTestimonial.text} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, text: e.target.value })} rows={4} />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>Rating</Label>
                            <Input type="number" min="1" max="5" value={editingTestimonial.rating} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, rating: parseInt(e.target.value) })} />
                          </div>
                          <div className="space-y-2">
                            <Label>Order</Label>
                            <Input type="number" value={editingTestimonial.order} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, order: parseInt(e.target.value) })} />
                          </div>
                          <div className="space-y-2">
                            <Label>Active</Label>
                            <Select value={String(editingTestimonial.is_active)} onValueChange={(v) => setEditingTestimonial({ ...editingTestimonial, is_active: v === "true" })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="true">Yes</SelectItem>
                                <SelectItem value="false">No</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => saveTestimonialMutation.mutate(editingTestimonial)} disabled={saveTestimonialMutation.isPending}>
                            <Save className="w-4 h-4 mr-2" /> Save
                          </Button>
                          <Button variant="outline" onClick={() => setEditingTestimonial(null)}>
                            <X className="w-4 h-4 mr-2" /> Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-4">
                {testimonials.map((t) => (
                  <Card key={t.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold">{t.name}</h3>
                          <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" onClick={() => setEditingTestimonial(t)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" onClick={() => deleteTestimonialMutation.mutate(t.id)}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">"{t.text}"</p>
                      <div className="flex gap-2 mt-3 text-xs">
                        <span className="px-2 py-1 rounded bg-gray-100">★ {t.rating}</span>
                        <span className="px-2 py-1 rounded bg-gray-100">Order: {t.order}</span>
                        {!t.is_active && <span className="px-2 py-1 rounded bg-red-100 text-red-700">Inactive</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries">
            <div className="space-y-4">
              {inquiries.map((inq) => (
                <Card key={inq.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold">{inq.name}</h3>
                        <p className="text-sm text-gray-500">{inq.email} {inq.phone && `• ${inq.phone}`}</p>
                        {inq.service && <p className="text-xs text-gray-400 mt-1">Service: {inq.service}</p>}
                      </div>
                      <Select value={inq.status} onValueChange={(v) => updateInquiryMutation.mutate({ id: inq.id, status: v })}>
                        <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{inq.message}</p>
                    <p className="text-xs text-gray-400 mt-2">{new Date(inq.created_date).toLocaleString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}