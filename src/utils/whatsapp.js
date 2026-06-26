// Update this number with your real WhatsApp number (country code, no + or spaces)
export const WHATSAPP_NUMBER = '905077069555';

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildApplicationMessage(form) {
  const lines = [
    '*New Admission Application - Admission Turkey*',
    '',
    `*Full Name:* ${form.fullName}`,
    `*Father's Name:* ${form.fatherName}`,
    `*Email:* ${form.email}`,
    `*Phone:* ${form.phone}`,
    `*Degree Type:* ${form.degreeType}`,
    `*Nationality:* ${form.nationality}`,
  ];

  if (form.preferredCourse?.trim()) {
    lines.push(`*Preferred Course:* ${form.preferredCourse}`);
  }

  if (form.message?.trim()) {
    lines.push(`*Message:* ${form.message}`);
  }

  return lines.join('\n');
}
