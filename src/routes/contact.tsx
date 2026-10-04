import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExternalLink, Github, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageFrame } from "@/components/portfolio/page-frame";
import { contactInfo } from "@/data/contact";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please provide your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(5, "Please write a message"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kyalo Isaac Kimeu" },
      { name: "description", content: "Contact Nairobi-based web developer Kyalo Isaac Kimeu." },
      { property: "og:title", content: "Contact | Kyalo Isaac Kimeu" },
      { property: "og:description", content: "Contact Nairobi-based web developer Kyalo Isaac Kimeu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Portfolio Message from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    toast.success("Message initiated! Thank you for reaching out.");
    reset();
  };

  return (
    <PageFrame
      title={contactInfo.title}
      tagline={contactInfo.tagline}
      previous={{ label: "Education", path: "/education" }}
      next={{ label: "Stats", path: "/stats" }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-5">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            Name <span className="text-[#E11D48]">*</span>
          </Label>
          <Input
            id="contact-name"
            placeholder={contactInfo.placeholders.name}
            className="h-[52px] rounded-lg border-border bg-background px-4 text-base focus-visible:ring-primary"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-[#E11D48]">{errors.name.message}</p>
          ) : null}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            Email <span className="text-[#E11D48]">*</span>
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder={contactInfo.placeholders.email}
            className="h-[52px] rounded-lg border-border bg-background px-4 text-base focus-visible:ring-primary"
            {...register("email")}
          />
          <p className="text-[14px] text-muted-foreground">{contactInfo.emailHelper}</p>
          {errors.email ? (
            <p className="text-xs text-[#E11D48]">{errors.email.message}</p>
          ) : null}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
            Message <span className="text-[#E11D48]">*</span>
          </Label>
          <Textarea
            id="contact-message"
            rows={3}
            placeholder={contactInfo.placeholders.message}
            className="min-h-[72px] rounded-lg border-border bg-background p-4 text-base focus-visible:ring-primary"
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-xs text-[#E11D48]">{errors.message.message}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-[52px] w-full rounded-lg bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring"
        >
          {contactInfo.submitButtonText}
        </Button>
      </form>

      {/* Info Row Below Form */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground border-t border-border pt-6">
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Mail className="size-4" />
          <span>Email: {contactInfo.email}</span>
        </a>
        <div className="inline-flex items-center gap-1.5">
          <MapPin className="size-4" />
          <span>Location: {contactInfo.location}</span>
        </div>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Github className="size-4" />
          <span>GitHub: {contactInfo.githubHandle}</span>
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </PageFrame>
  );
}

