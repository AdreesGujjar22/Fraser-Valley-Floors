import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(120),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [service, setService] = useState(defaultService ?? "");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = schema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service,
      message: data.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please complete the form");
      return;
    }
    setSubmitting(true);
    // Placeholder submission — wire up to a backend later
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thanks! We'll be in touch within one business day.");
    form.reset();
    setService(defaultService ?? "");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required maxLength={80} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(604) 555-0123"
            required
            maxLength={30}
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          maxLength={120}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="service">Service</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, size, and timeline."
          required
          maxLength={1000}
        />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12"
      >
        {submitting ? "Sending..." : "Request My Free Quote"}
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted about your project. We never share your info.
      </p>
    </form>
  );
}
