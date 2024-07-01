import Avatar from "@/ui/atom/Avatar";
import Badge from "@/ui/atom/Badge";
import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
interface TaskCardProps {
  cover?: string;
  title: string;
  details: string;
  persianDate: string;
  profileUser?: string;
  nameUser?: string;
}
const TaskCard: React.FC<TaskCardProps> = (props) => {
  const { cover, title, details, persianDate, nameUser, profileUser } = props;
  return (
    <div
      className={`rounded-[16px]  shadow-xl  w-[250px] my-2 mx-1 p-s border relative `}
    >
      {cover && (
        <img
          src={cover}
          alt="task cover"
          className={` mb-s rounded-[4px] noFilter`}
        />
      )}
      <div className="flex items-center justify-between text-[12px] text-[#534D60] mb-s">
        <Text textSize="boldM">{title}</Text>
        {(profileUser || nameUser) && (
          <Avatar avatarImage={profileUser} name={nameUser} size="small" />
        )}
      </div>
      <div className="flex items-start gap-2 mb-s">
        <Text textSize="bodyS" className="line-clamp-2">
          {details}
        </Text>
        <SvgIcon name="text-right" />
      </div>
      <div className="flex items-center gap-1 text-[12px] mb-s">
        <SvgIcon name="flag" className="text-red-primary" />

        <span>{persianDate}</span>
      </div>
      <div className="flex items-center gap-1">
        <Badge textLabel="پروژه" />
        <Badge textLabel="پروژه" />
        <Badge textLabel="پروژه" />
      </div>
      <div className={`flex items-center justify-between mt-s p-2`}>
        <SvgIcon name="done" className="cursor-pointer" />
        <SvgIcon name="three-dots" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskCard;
