"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { Spinner } from "./spinner";

function Contact() {
  const { ref } = useSectionInView("Contact");

  const [sendFormloading, setSendFormloading] = useState(false);

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      className=" scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please click{" "}
        <a
          href="mailto:wubshetyenguss@gmail.com"
          className="underline hover:text-gray-950 dark:hover:text-gray-100"
        >
          {" "}
          here{" "}
        </a>{" "}
        to contact me directly. Alternatively, you can also use the form below.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          setSendFormloading(true);
          console.log("🚀 ~ action={ ~ sendFormloading:", sendFormloading);
          setTimeout(async () => {
            await sendEmail(formData).then((resp) => {
              toast.success(
                "Your message has been sent! I will get back to you shortly."
              );
              setSendFormloading(false);
            });
          }, 2000);
        }}
      >
        <input
          type="email"
          required
          maxLength={500}
          name="senderEmail"
          placeholder="Please enter your email address here..."
          className="px-4 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          placeholder="Write your text here..."
          name="message"
          required
          maxLength={5000}
          className="borderBlack p-4 h-52 my-3 rounded-lg dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 hover:bg-gray-950 active:scale-105 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 dark:bg-white dark:bg-opacity-10"
        >
          {sendFormloading ? (
            <Spinner size="medium" />
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
