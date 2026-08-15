import { Router, Request, Response } from 'express';
import { supabase } from '../lib/supabase';
import { sendRegistrationEmail } from '../lib/mailer';

const router = Router();

// GET /api/clients - Fetch all clients
router.get('/', async (req: Request, res: Response) => {
  try {
    // Placeholder logic for fetching clients from Supabase
    // const { data, error } = await supabase.from('clients').select('*');
    // if (error) throw error;
    
    res.json({ success: true, data: [] });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/clients - Register a new client and send notification email
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userType, name, email, phone, company, standard, serviceType, message } = req.body;
    
    if (!name || !email || !phone || !standard) {
       res.status(400).json({ success: false, message: 'Missing required fields.' });
       return;
    }

    const data = { id: Date.now(), userType, name, email, phone, company, standard, serviceType, message };

    // Trigger the email notification using Nodemailer
    const emailSent = await sendRegistrationEmail(data);

    if (emailSent) {
      console.log(`Successfully sent registration notification for ${email}`);
    }

    res.status(201).json({ success: true, message: 'Client registered successfully.', data });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
