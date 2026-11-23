"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bookingFormSchema,
  BookingFormValues,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  experienceTypes,
  ExperienceType,
} from "@/lib/whatsapp";
import { siteConfig } from "@/content/site-config";
import { Calendar, Users, Baby, MessageSquareText, ShieldCheck, ExternalLink } from "lucide-react";

interface WhatsAppBookingFormProps {
  defaultExperience?: ExperienceType;
  onSuccess?: () => void;
  compact?: boolean;
  formIdPrefix?: string;
}

export function WhatsAppBookingForm({
  defaultExperience = "Visita em família (Day Use)",
  onSuccess,
  compact = false,
  formIdPrefix = "booking",
}: WhatsAppBookingFormProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewMessage, setPreviewMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      experienceType: defaultExperience,
      desiredDate: "",
      adultsCount: 2,
      childrenCount: 1,
      notes: "",
    },
  });

  useEffect(() => {
    setValue("experienceType", defaultExperience);
  }, [defaultExperience, setValue]);

  const currentValues = watch();

  const onSubmit = (values: BookingFormValues) => {
    const message = buildWhatsAppMessage(values);
    const url = buildWhatsAppUrl(siteConfig.contact.whatsappNumber, message);
    setPreviewMessage(message);
    setPreviewUrl(url);

    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 text-left"
      aria-label="Formulário de pré-atendimento para visita via WhatsApp"
    >
      {/* Tipo de experiência */}
      <div>
        <label
          htmlFor={`${formIdPrefix}-experienceType`}
          className="block text-sm font-semibold text-[#303A2C] mb-1.5"
        >
          Tipo de experiência
        </label>
        <select
          id={`${formIdPrefix}-experienceType`}
          {...register("experienceType")}
          className="w-full rounded-xl border border-[#303A2C]/20 bg-[#FBF8F1] px-4 py-3 text-sm text-[#303A2C] font-medium focus:border-[#315B3D] focus:outline-none"
          aria-invalid={Boolean(errors.experienceType)}
        >
          {experienceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.experienceType && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-[#A63A2E]">
            {errors.experienceType.message}
          </p>
        )}
      </div>

      {/* Data e Quantidades */}
      <div className={compact ? "grid grid-cols-1 sm:grid-cols-3 gap-4" : "grid grid-cols-1 sm:grid-cols-3 gap-4"}>
        <div>
          <label
            htmlFor={`${formIdPrefix}-desiredDate`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#303A2C] mb-1.5"
          >
            <Calendar className="w-4 h-4 text-[#315B3D]" aria-hidden="true" />
            <span>Data desejada</span>
          </label>
          <input
            id={`${formIdPrefix}-desiredDate`}
            type="date"
            {...register("desiredDate")}
            className="w-full rounded-xl border border-[#303A2C]/20 bg-[#FBF8F1] px-3.5 py-2.5 text-sm text-[#303A2C] font-medium focus:border-[#315B3D]"
            aria-invalid={Boolean(errors.desiredDate)}
            aria-describedby={errors.desiredDate ? `${formIdPrefix}-date-error` : undefined}
          />
          {errors.desiredDate && (
            <p
              id={`${formIdPrefix}-date-error`}
              role="alert"
              className="mt-1.5 text-xs font-medium text-[#A63A2E]"
            >
              {errors.desiredDate.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formIdPrefix}-adultsCount`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#303A2C] mb-1.5"
          >
            <Users className="w-4 h-4 text-[#315B3D]" aria-hidden="true" />
            <span>Adultos</span>
          </label>
          <input
            id={`${formIdPrefix}-adultsCount`}
            type="number"
            min={1}
            max={200}
            inputMode="numeric"
            {...register("adultsCount", { valueAsNumber: true })}
            className="w-full rounded-xl border border-[#303A2C]/20 bg-[#FBF8F1] px-3.5 py-2.5 text-sm text-[#303A2C] font-medium focus:border-[#315B3D]"
            aria-invalid={Boolean(errors.adultsCount)}
            aria-describedby={errors.adultsCount ? `${formIdPrefix}-adults-error` : undefined}
          />
          {errors.adultsCount && (
            <p
              id={`${formIdPrefix}-adults-error`}
              role="alert"
              className="mt-1.5 text-xs font-medium text-[#A63A2E]"
            >
              {errors.adultsCount.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formIdPrefix}-childrenCount`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#303A2C] mb-1.5"
          >
            <Baby className="w-4 h-4 text-[#315B3D]" aria-hidden="true" />
            <span>Crianças</span>
          </label>
          <input
            id={`${formIdPrefix}-childrenCount`}
            type="number"
            min={0}
            max={300}
            inputMode="numeric"
            {...register("childrenCount", { valueAsNumber: true })}
            className="w-full rounded-xl border border-[#303A2C]/20 bg-[#FBF8F1] px-3.5 py-2.5 text-sm text-[#303A2C] font-medium focus:border-[#315B3D]"
            aria-invalid={Boolean(errors.childrenCount)}
            aria-describedby={errors.childrenCount ? `${formIdPrefix}-children-error` : undefined}
          />
          {errors.childrenCount && (
            <p
              id={`${formIdPrefix}-children-error`}
              role="alert"
              className="mt-1.5 text-xs font-medium text-[#A63A2E]"
            >
              {errors.childrenCount.message}
            </p>
          )}
        </div>
      </div>

      {/* Dúvidas ou observações */}
      <div>
        <label
          htmlFor={`${formIdPrefix}-notes`}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#303A2C] mb-1.5"
        >
          <MessageSquareText className="w-4 h-4 text-[#315B3D]" aria-hidden="true" />
          <span>Dúvidas ou observações (opcional)</span>
        </label>
        <textarea
          id={`${formIdPrefix}-notes`}
          rows={compact ? 2 : 3}
          placeholder="Ex.: Gostaríamos de saber sobre almoço, espaço para aniversário ou acessibilidade..."
          {...register("notes")}
          className="w-full rounded-xl border border-[#303A2C]/20 bg-[#FBF8F1] px-4 py-2.5 text-sm text-[#303A2C] placeholder:text-[#303A2C]/55 focus:border-[#315B3D]"
        />
        {errors.notes && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-[#A63A2E]">
            {errors.notes.message}
          </p>
        )}
      </div>

      {/* Aviso transparente sobre confirmação e privacidade */}
      <div className="rounded-xl bg-[#EFE6D5]/80 border border-[#303A2C]/12 p-3.5 text-xs text-[#303A2C]/90 leading-relaxed flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-[#315B3D] shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <strong className="font-semibold text-[#303A2C]">Importante:</strong> Este envio apenas
          organiza sua mensagem para o WhatsApp oficial. A reserva não é automática e depende da
          confirmação de disponibilidade pela equipe do estabelecimento. Nenhum dado pessoal ou de
          menores é armazenado neste site.
        </div>
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#315B3D] hover:bg-[#24452D] text-[#F7F0E3] font-semibold px-6 py-3.5 text-sm sm:text-base transition-colors cursor-pointer shadow-sm"
        >
          <span>Continuar atendimento no WhatsApp</span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Preview e link direto pós-submissão (também facilita acessibilidade e testes) */}
      {previewUrl && previewMessage && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 rounded-xl border border-[#315B3D]/30 bg-[#315B3D]/8 p-4 space-y-2.5"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#315B3D]">
            Mensagem pronta para o WhatsApp
          </p>
          <pre className="whitespace-pre-wrap text-xs text-[#303A2C] font-sans bg-[#FBF8F1] p-3 rounded-lg border border-[#303A2C]/10">
            {previewMessage}
          </pre>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="whatsapp-generated-link"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315B3D] underline hover:text-[#24452D]"
          >
            <span>Caso a janela não tenha aberto, clique aqui para abrir o WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      )}

      {/* Resumo dinâmico discreto */}
      <p className="text-[11px] text-[#303A2C]/70 text-center">
        Prévia: {currentValues.experienceType} • {currentValues.adultsCount || 1} adulto(s) •{" "}
        {currentValues.childrenCount || 0} criança(s)
      </p>
    </form>
  );
}
