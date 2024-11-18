import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faq from "@/public/images/home/faq-img.png";
import Image from "next/image";
import Link from "next/link";
const faqs = [
  {
    question: "What is Ducare?",
    id: 1,
    answer: (
      <p className="text-default-500 text-sm">
        A{" "}
        <Link
          href="https://themeforest.net/licenses/terms/regular"
          target="_blank"
          className="text-primary"
        >
          Regular License
        </Link>{" "}
        Ducare is a premium and user-friendly digital platform designed to help
        users achieve their dreams and goals. Our mission is to create an
        accessible and engaging experience that empowers individuals to achieve
        their dreams and goals.
      </p>
    ),
  },
  {
    question: " Can I request a specific doctor when booking my appointment?",
    id: 2,
    answer:
      "Yes, you can usually request a specific doctor when booking your appointment, though availability may vary based on their schedule.",
  },
  {
    question:
      " What should I do if I need to cancel or reschedule my appointment?",
    id: 3,
    answer:
      "If you need to cancel or reschedule your appointment, contact the doctor as soon as possible to inform them and to reschedule for another available time slot.",
  },
  {
    question: " What if I'm running late for my appointment?",
    id: 4,
    answer:
      "If you know you will be late, it's courteous to call the doctor's office and inform them. Depending on their policy and schedule, they may be able to accommodate you or reschedule your appointment.",
  },
  {
    question: "Can I book appointments for family members or dependents?",
    id: 5,
    answer:
      "Yes, in many cases, you can book appointments for family members or dependents. However, you may need to provide their personal information and consent to do so.",
  },
];

const Faq = () => {
  return (
    <section className="py-16 2xl:py-[120px] bg-default-100">
      <div className="container">
        <div className="max-w-[670px] mx-auto mb-14">
          <h1 className="text-center text-xl xl:text-3xl xl:leading-[46px] font-semibold text-default-900 mb-3">
            <h1 className="text-2xl font-medium text-primary">FAQs</h1>
          </h1>
          <p className="text-base xl:leading-7 text-center text-default-700 ">
            <strong> Got Questions?</strong> We've compiled a list of answers to
            your frequently asked questions. If you can't find what you're
            looking for here, don't hesitate to reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center gap-y-6">
          <div className="hidden lg:block">
            <Image src={faq} alt="" width={600} height={400} />
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, i) => (
              <AccordionItem
                value={`item-${i}`}
                className="bg-primary/10 dark:bg-gray-900 text-default-900"
              >
                <AccordionTrigger className="   text-left font-medium  ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
