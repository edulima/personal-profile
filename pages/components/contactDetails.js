import H2 from './h2'

const ContactDetails = ({ label, text }) => (
  <div className="flex flex-col bg-gradient-to-r from-blue-900 to-blue-500 p-10 rounded-none sm:rounded">
    <H2 text={label} />
    <p className="text-center lg:text-left">{ text }</p>
  </div>
)

export default ContactDetails