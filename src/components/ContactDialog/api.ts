"use server";

import { Resend } from "resend";

export const sendMessage = async (formData: FormData) => {
  const resend = new Resend(process.env?.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: process.env?.MAIL_FROM as string,
      to: process.env?.MAIL_TO as string,
      subject: "New Message From Website !",
      text: `Name: ${formData.get("name")}\n\nEmail: ${formData.get("email")}\n\nText: ${formData.get("text")}`,
    });

    if (error) throw error;
  } catch (error) {
    console.log(error);
    return "An error occured. Please try again.";
  }

  return "Message sent successfully. We will be in touch.";
};
