import { useState } from "react";
import CheckBox from "@/ui/atom/CheckBox";
import InputText from "@/ui/atom/InputText";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaRegister } from "@/validation/validationSchema";
import { Button } from "@/ui/atom/Button";

interface RegisterData {
  userName: string;
  email: string;
  password: string;
  ceckbox: boolean;
}

function RegisterPage() {
  const handleSubmit = (data: RegisterData) => {
    console.log("data", data);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const handleTermsClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <OutBox
        title="ثبت‌نام در کوئرا تسک منیجر"
        className="w-[540px] flex flex-col justify-between"
      >
        <FormContainer onSubmit={handleSubmit} schema={schemaRegister}>
          <InputText name="username" label="نام کاربری" />
          <InputText name="email" label="ایمیل" />
          <InputText name="password" label="رمز عبور" type="password" />

          <CheckBox
            labelText=" را می‌پذیرم."
            terms={<span className="underline"> قوانین و مقررات</span>}
            classNameLabel="mb-1"
            onTermsClick={handleTermsClick}
          />
          <Button type="submit" isBold>
            ثبت‌نام
          </Button>
        </FormContainer>
      </OutBox>
      <OutBox
        isOpen={modalOpen}
        toggle={handleCloseModal}
        title="قوانین و مقررات"
        className="w-[800px] h-[509px]"
      >
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
        </p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </OutBox>
    </div>
  );
}

export default RegisterPage;
