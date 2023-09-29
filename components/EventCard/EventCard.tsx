type CardData = {
  name: string
  imageURL: string
  dateStart: Date
  dateEnd: Date
  duration: string
  location: string
}

type Props = {
  cardData: CardData
}

export const EventCard = ({ cardData }: Props): JSX.Element => {
  const { name, dateStart, dateEnd, duration, location } = cardData

  const monthStartName = dateStart.toLocaleString('en', { month: 'long' })
  const dayStart = dateStart.getDate()
  const dayEnd = dateEnd.getDate()
  const year = dateStart.getFullYear()

  return (
    <div className="flex h-[260px] w-[220px] flex-col content-center justify-between rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4">
      <div className="h-[64px] w-[188px]">
        <p className=" whitespace-nowrap text-[16px] leading-[normal] tracking-[0] text-slate-50">
          {`${name} @ ${location}`}
        </p>
        <p className=" text-[14px] leading-[normal] tracking-[0] text-slate-50">
          {`${monthStartName} ${dayStart} - ${dayEnd}, ${year}`}
        </p>
        <p className=" text-[14px] leading-[normal] tracking-[0] text-slate-50">
          {duration}
        </p>
      </div>
      <button className="box-border h-[34px] w-full rounded-[4px] bg-emerald-500 text-center text-slate-50">
        Buy Tickets
      </button>
    </div>
  )
}
