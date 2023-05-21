import { Footer } from '@/components/chat/footer/Footer';
import { Input } from '@/components/chat/input/Input';
import { Message } from '@/components/chat/message/Message';
import { MessagesContainer } from '@/components/chat/messages-container/MessagesContainer';
import { Time } from '@/components/chat/time/Time';
import { Header } from '@/components/header/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />
      <MessagesContainer>
        <Time>11:23 am</Time>

        <Message
          me={false}
          author="Zika Zikic"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quasi quidem suscipit soluta exercitationem, voluptatem quam eaque
            illo. "
        />
        <Message me={false} author="Zika Zikic" text="Lorem " />

        <Message me={true} text="Cao Ziko, pauza" author="Pera Peric" />
      </MessagesContainer>
      <Footer>
        <Input />
      </Footer>
    </main>
  );
}
