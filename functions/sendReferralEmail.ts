import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import { Resend } from 'npm:resend@4.0.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { name, email, phone, service, message } = await req.json();

        // Save to database
        await base44.entities.ContactInquiry.create({
            name,
            email,
            phone,
            service: service || "Other",
            message,
            status: "new"
        });

        // Send email notification
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'holisticndiscare@gmail.com',
            subject: `New Referral from ${name}`,
            html: `
                <h2>New Referral Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
});