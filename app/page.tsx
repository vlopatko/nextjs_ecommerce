// import { useSession, signIn, signOut } from "next-auth/react";
import { EventCard } from '@/components/EventCard/EventCard'

const Home = () => {
  const mockCardData = {
    name: 'New Concert',
    imageURL: 'http://testimage.com',
    dateStart: new Date(),
    dateEnd: new Date(),
    duration: '10.00-17.00',
    location: 'Kyiv',
  }

  return (
    <div className="container flex flex-wrap gap-4">
      <EventCard cardData={mockCardData} />
      <EventCard cardData={mockCardData} />
      <EventCard cardData={mockCardData} />
      <EventCard cardData={mockCardData} />
    </div>
  )
}

export default Home
