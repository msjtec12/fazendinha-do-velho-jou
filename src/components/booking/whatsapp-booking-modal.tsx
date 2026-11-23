"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Sparkles } from "lucide-react";
import { useBooking } from "./booking-context";
import { WhatsAppBookingForm } from "./whatsapp-booking-form";

export function WhatsAppBookingModal() {
  const { isOpen, closeBookingModal, defaultExperience } = useBooking();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeBookingModal()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#303A2C]/60 backdrop-blur-xs transition-opacity" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#F7F0E3] border border-[#303A2C]/15 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto focus:outline-none"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#315B3D]/10 px-3 py-1 text-xs font-semibold text-[#315B3D] mb-2">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Pré-atendimento Oficial</span>
              </span>
              <Dialog.Title className="font-serif text-2xl sm:text-3xl font-semibold text-[#303A2C]">
                Planeje sua visita à fazendinha
              </Dialog.Title>
              <Dialog.Description className="mt-1.5 text-sm text-[#303A2C]/80 leading-relaxed">
                Informe a data pretendida e a composição do seu grupo para iniciarmos o atendimento
                no WhatsApp com todas as informações organizadas.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Fechar janela de pré-atendimento"
              className="rounded-full p-2 text-[#303A2C]/70 hover:bg-[#303A2C]/10 hover:text-[#303A2C] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <WhatsAppBookingForm
            defaultExperience={defaultExperience}
            formIdPrefix="modal-booking"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
