import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import type { Feedback } from "../types/feedback";

export default function useFeedback() {
  const [form, setForm] = useState<Feedback>({
    name: "",
    email: "",
    category: "",
    rating: 0,
    message: "",
    notify: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] =
    useState<"success" | "error">("success");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: name === "rating" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setShowSuccess(true);
      setNotificationMessage("Feedback sent successfully!");
      setNotificationType("success");

      // reset form
      setForm({
        name: "",
        email: "",
        category: "",
        rating: 0,
        message: "",
        notify: false,
      });
    } catch {
      setNotificationMessage("Something went wrong");
      setNotificationType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    setForm,
    handleChange,
    handleSubmit,
    isSubmitting,
    showSuccess,
    notificationMessage,
    notificationType,
  };
}