import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// This is a simplified webhook handler for development purposes
// In production, you should use proper webhook verification with svix
export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const event = payload as WebhookEvent;
    const eventType = event.type;
    
    // Log webhook events
    console.log(`Received webhook event: ${eventType}`);
    
    // Handle user creation
    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name } = event.data;
      console.log(`User created: ${id}`);
      
      // For example, to sync with your database:
      // await db.user.create({
      //   data: {
      //     id: id,
      //     email: email_addresses[0]?.email_address,
      //     firstName: first_name,
      //     lastName: last_name,
      //     role: "driver", // Default role
      //   },
      // });
    }
    
    // Handle user update (including metadata changes)
    if (eventType === "user.updated") {
      const { id, public_metadata } = event.data;
      console.log(`User updated: ${id}`);
      
      // If user role changes, you can update your database
      // await db.user.update({
      //   where: { id: id },
      //   data: { role: public_metadata.role },
      // });
    }
    
    // Handle user deletion
    if (eventType === "user.deleted") {
      const { id } = event.data;
      console.log(`User deleted: ${id}`);
      
      // Clean up your database records
      // await db.user.delete({
      //   where: { id: id },
      // });
    }
    
    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Error processing webhook", { status: 400 });
  }
} 