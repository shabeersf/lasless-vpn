
interface ContainerProps {
  children: React.ReactNode,
  className?: string,
  id?: string | "",
}
const Container = ({ children, className,id }: ContainerProps) => {
  return (
    <section id={id} className={`w-full max-w-[1440px] mx-auto p-4 md:p-8 ${className}`}>
      {
        children
      }
    </section>
  )
}

export default Container