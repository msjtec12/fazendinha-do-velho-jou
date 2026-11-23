import { z } from "zod";
import { formatDateBR } from "./utils";

export const experienceTypes = [
  "Visita em família (Day Use)",
  "Almoço no restaurante rural",
  "Comemoração de aniversário",
  "Passeio escolar / grupo pedagógico",
  "Outras dúvidas sobre a visita",
] as const;

export type ExperienceType = (typeof experienceTypes)[number];

export const bookingFormSchema = z.object({
  experienceType: z.enum(experienceTypes, {
    required_error: "Selecione o tipo de experiência desejada.",
  }),
  desiredDate: z
    .string()
    .min(1, "Informe a data desejada para a visita.")
    .refine((val) => {
      const parsed = Date.parse(val);
      return !Number.isNaN(parsed);
    }, "Informe uma data válida."),
  adultsCount: z
    .number({ invalid_type_error: "Informe o número de adultos." })
    .int("Use apenas números inteiros.")
    .min(1, "Informe pelo menos 1 adulto responsável.")
    .max(200, "Para grupos acima de 200 pessoas, descreva nas observações."),
  childrenCount: z
    .number({ invalid_type_error: "Informe a quantidade de crianças." })
    .int("Use apenas números inteiros.")
    .min(0, "A quantidade de crianças não pode ser negativa.")
    .max(300, "Para grupos escolares maiores, detalhe nas observações."),
  notes: z
    .string()
    .max(500, "A observação pode ter no máximo 500 caracteres.")
    .optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function buildWhatsAppMessage(values: BookingFormValues): string {
  const formattedDate = formatDateBR(values.desiredDate);
  const adultsLabel = values.adultsCount === 1 ? "1 adulto" : `${values.adultsCount} adultos`;
  const childrenLabel =
    values.childrenCount === 1 ? "1 criança" : `${values.childrenCount} crianças`;

  const baseLines = [
    `Olá! Gostaria de consultar uma visita à fazendinha para ${formattedDate}, com ${adultsLabel} e ${childrenLabel}.`,
    "",
    `• Tipo de experiência: ${values.experienceType}`,
    `• Data pretendida: ${formattedDate}`,
    `• Grupo: ${adultsLabel} e ${childrenLabel}`,
  ];

  if (values.notes && values.notes.trim().length > 0) {
    baseLines.push(`• Dúvidas / observações: ${values.notes.trim()}`);
  }

  baseLines.push(
    "",
    "Poderia me informar os horários, valores atualizados e procedimentos para confirmação?"
  );

  return baseLines.join("\n");
}

export function buildWhatsAppUrl(phoneDigits: string, message: string): string {
  const cleanPhone = phoneDigits.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
