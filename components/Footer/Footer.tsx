const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex h-80 w-full items-end justify-center bg-footer">
      <p className="h-fit p-4">
        © {currentYear} This is a ticket service Publiq
      </p>
    </div>
  )
}

export default Footer
