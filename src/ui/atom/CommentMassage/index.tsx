import Avatar from "../Avatar";

function CommentMassage() {
  return (
    <div className=" flex p-[10px] gap-[10px] mt-[10px]">
      <Avatar className="flex-none" />
      <div className="border-[1px] border-gray-secondary p-[12px] rounded-xl">
        <div className="flex justify-between">
          <h4 className="text-gray-light text-[12px]">
            <span className="text-brand-primary text-[16px] ml-[4px]">شما</span>
            کامنت گذاشتید
          </h4>
          <span className="text-gray-light text-[12px]">12 تیر</span>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است
        </p>
      </div>
    </div>
  );
}

export default CommentMassage;
