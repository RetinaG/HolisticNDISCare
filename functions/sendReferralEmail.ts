import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import { Resend } from 'npm:resend@4.0.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

Deno.serve(async (req) => {
    try {
        const body = await req.json();
        console.log('Received request:', body);
        
        const { name, email, phone, service, message } = body;
        
        const base44 = createClientFromRequest(req);

        // Save to database (using service role for public access)
        console.log('Saving to database...');
        await base44.asServiceRole.entities.ContactInquiry.create({
            name,
            email,
            phone,
            service: service || "Other",
            message,
            status: "new"
        });
        console.log('Saved to database');

        // Send email notification
        console.log('Sending email...');
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
        console.log('Email sent');

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Function error:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
});