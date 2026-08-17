const navOptions = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]
export { navOptions }

export const WHATSAPP_NUMBER = '923286536520' 
export const CONSULTATION_MESSAGE = "Hi Velora team, I'd like to book a consultation to discuss a property."

export const whatsappConsultationLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`