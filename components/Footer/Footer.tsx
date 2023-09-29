const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='w-full h-80 bg-footer flex items-end justify-center'>
      <p className="h-fit p-4">© {currentYear} This is a ticket service Publiq</p>
    </div>
  )
}

export default Footer;
