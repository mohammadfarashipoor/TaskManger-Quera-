import { Button } from "../Button";
import ColorBox from "../ColorBox";
import Dropdown from "../Dropdown";
import Text from "../typography/Text";

interface WorkspaceItemProps {
  workspace: any;
}
const BadgeColor = <ColorBox color="#208D8E" />;
const WorkspaceItem: React.FC<WorkspaceItemProps> = (props) => {
  const { workspace } = props;
  return (
    <Dropdown Header={workspace.name} InlineElement={BadgeColor}>
      <div className="flex flex-col gap-3 mt-3">
        {workspace.project ? (
          workspace.projects.map((item: any) => (
            <Text textSize="bodyL">{item.title}</Text>
          ))
        ) : (
          <Button isOnlyBorderButton>ساختن پروژه جدید</Button>
        )}
      </div>
    </Dropdown>
  );
};

export default WorkspaceItem;
