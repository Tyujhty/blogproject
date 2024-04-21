import { Button, Card } from "flowbite-react";
import { MessageInterface } from "../../services/interfaces/Message";
export default function MessageCard(props: {
  message: MessageInterface;
  index: number;
}) {
  const { message, index } = props;
  return (
    <>
      <Card className=" w-full" key={index}>
        <div className="">
          <div className=" flex justify-between">
            <div className=" flex gap-6">
              <p className=" font-bold tracking-tight text-gray-900 dark:text-white">
                {message.name}
              </p>
              <p>{message.subject}</p>
            </div>
            <p>{message.created_ad}</p>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">
            {message.message.substring(0, 100)}...
          </p>
        </div>
        <Button className="max-w-40 font-bold">Voir</Button>
      </Card>
    </>
  );
}
