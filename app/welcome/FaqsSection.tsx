import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "Hoe werkt de automatische facturatie?",
    answer:
      "Zodra een bestelling geplaatst wordt, genereert AppName automatisch een factuur.",
  },
  {
    question: "Is technische kennis vereist om te starten?",
    answer: "Nee, AppName is plug & play – geen technische kennis nodig.",
  },
  {
    question: "Kan ik mijn bestaande instellingen behouden?",
    answer: "Ja, wij factureren met jouw bestaande [APP]-configuratie.",
  },
];

const FaqSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Vragen <span className="text-[#F41DA4]">& Antwoorden</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Bekijk de meest gestelde vragen. Kan je het antwoord niet vinden?
            Stuur ons een bericht. Bekijk de meest gestelde vragen. Kan je het
            antwoord niet vinden? Stuur ons een bericht.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-[#F41DA4] text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
              onClick={() => setIsOpen(true)}
            >
              Contact
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#F41DA4] transition">
              Alle FAQ’s
            </button>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                    {faq.question}
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-[#F41DA4]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pt-2 pb-4 text-gray-300 bg-gray-900 rounded-b-lg">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        {/* Contact Modal */}
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white text-gray-800 w-full max-w-lg rounded-xl p-8">
                  <Dialog.Title className="text-2xl font-bold mb-6">
                    Waarover gaat jouw vraag?
                  </Dialog.Title>

                  <form className="space-y-4">
                    <select className="w-full border px-4 py-2 rounded">
                      <option>Customer Support</option>
                      <option>Presales</option>
                    </select>

                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full border px-4 py-2 rounded"
                    />
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Voornaam*"
                        className="w-1/2 border px-4 py-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Familienaam*"
                        className="w-1/2 border px-4 py-2 rounded"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Contactnummer"
                      className="w-full border px-4 py-2 rounded"
                    />
                    <textarea
                      placeholder="Jouw pre-sales vraag hier.."
                      className="w-full border px-4 py-2 rounded"
                      rows={4}
                    />

                    <div className="text-sm text-gray-600">
                      Support vragen?{" "}
                      <span className="text-[#F41DA4] font-medium">
                        Meld je eerst op jouw klantenaccount
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#F41DA4] text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition"
                    >
                      Verzenden
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
};

export default FaqSection;
