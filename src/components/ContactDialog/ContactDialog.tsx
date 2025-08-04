import { FC, useState, useEffect, ChangeEvent } from "react";
import { TContactDialog, TFormField } from "./types";
import { Button } from "../Button";

export const ContactDialog: FC<TContactDialog> = ({
  isOpen = false,
  handleClose,
}) => {
  const [form, setForm] = useState<{
    [key in TFormField]: string;
  }>({ name: "", email: "", text: "" });

  useEffect(() => {
    if (!isOpen) {
      window.document.body.style.overflowY = "visible";
      setForm({ name: "", email: "", text: "" });
      return;
    }

    window.document.body.style.overflowY = "hidden";
    const nameInput = document.getElementById("nameInput");
    nameInput?.focus();
  }, [isOpen]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: TFormField
  ) => {
    setForm({ ...form, [field]: event.target.value });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center transition-opacity duration-1000 ${
        isOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
      onClick={handleClose}
    >
      <form
        className="w-[480px] bg-white p-8 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-5 text-[rgba(0,0,0,0.7)]">
          Send your message and we'll get back to you as soon as possible.
        </p>

        <input
          type="text"
          required
          placeholder="Name"
          className="w-full outline-none lbg__input mb-3 placeholder-[rgba(0,0,0,0.3)] text-[15px] transition-all duration-1000 border-3 border-[rgba(0,0,0,0.06)] focus:border-3 focus:border-[#9C7A97] px-3 py-3 rounded-sm"
          id="nameInput"
          value={form.name}
          onChange={(e) => {
            handleChange(e, "name");
          }}
        />

        <input
          type="email"
          required
          placeholder="Email Address"
          className="w-full outline-none mb-3 placeholder-[rgba(0,0,0,0.3)] text-[15px] transition-all duration-1000 border-3 border-[rgba(0,0,0,0.06)] focus:border-3 focus:border-[#9C7A97] px-3 py-3 rounded-sm"
          value={form.email}
          onChange={(e) => {
            handleChange(e, "email");
          }}
        />

        <textarea
          rows={4}
          required
          placeholder="What do you want to say ?"
          className="w-full outline-none mb-3 placeholder-[rgba(0,0,0,0.3)] text-[15px] transition-all duration-1000 border-3 border-[rgba(0,0,0,0.06)] focus:border-3 focus:border-[#9C7A97] px-3 py-3 rounded-sm"
          style={{ resize: "none" }}
          value={form.text}
          onChange={(e) => {
            handleChange(e, "text");
          }}
        />

        <Button handleClick={() => {}} classes="w-full py-3">
          Send
        </Button>
      </form>
    </div>
  );
};
