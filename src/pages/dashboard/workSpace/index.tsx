import { Button } from "@/ui/atom/Button";
import { Card } from "@/ui/atom/Card";
import { CardBox } from "@/ui/atom/CardBox";

function WorkSpacePage() {
  return (
    <>
      <div>
        <CardBox title="درس مدیریت پروژه" className="">
          <Card className="bg-gradient-to-b from-green-300 via-green-500 to-white-200 ml-5">
            پروژه اول
          </Card>
          <Card className="bg-gradient-to-b from-green-300 via-green-500 to-white-200 ml-5">
            پروژه دوم
          </Card>
          <Card className="bg-gradient-to-b from-green-300 via-green-500 to-white-200 ml-5">
            پروژه سوم
          </Card>
        </CardBox>
      </div>
      <hr />
      <div>
        <CardBox title="کارهای شخصی" className="">
          <Card className="bg-gradient-to-b from-orange-200 via-orange-500 to-white-200 ml-5">
            پروژه اول
          </Card>
          <Card className="bg-gradient-to-b from-orange-300 via-orange-500 to-white-200 ml-5">
            پروژه دوم
          </Card>
          <Card className="bg-gradient-to-b from-orange-300 via-orange-500 to-white-200 ml-5">
            پروژه سوم
          </Card>
        </CardBox>
      </div>
      <hr />
      <div className="flex">
        <Button
          type="button"
          isOnlyBorderButton={true}
          iconName="add"
          className="py-4 my-5 mr-8"
        >
          ساختن پروژه جدید
        </Button>
      </div>
      <hr />
      <div>
        <CardBox title="درس طراحی الگوریتم" className="mb-8">
          <Card className="bg-gradient-to-b from-blue-300 via-blue-500 to-white-200 ml-5">
            پروژه اول
          </Card>
          <Card className="bg-gradient-to-b from-blue-300 via-blue-500 to-white-200 ml-5">
            پروژه دوم
          </Card>
          <Card className="bg-gradient-to-b from-blue-300 via-blue-500 to-white-200 ml-5">
            پروژه سوم
          </Card>
        </CardBox>
      </div>
    </>
  );
}

export default WorkSpacePage;
