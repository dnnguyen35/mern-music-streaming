import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChatStore } from "@/stores/useChatStore";

const ChatHeader = () => {
  const { selectedUser, onlineUsers } = useChatStore();

  if (!selectedUser) return null;

  return (
    <div className="p-4 border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={selectedUser.imageUrl} />
          <AvatarFallback>{selectedUser.fullname[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-medium">{selectedUser.fullname}</h2>

          {onlineUsers.has(selectedUser.clerkId) ? (
            <p className="text-sm text-green-500">Online</p>
          ) : (
            <p className="text-sm text-zinc-400">Offline</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
