function ResetPage() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: " 50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FormContainer>
          <OutBox className="w-[640px] p-6 gap-8 flex flex-col ju" title="تغییر رمز عبور">
            <InputText
              label="رمز عبور جدید را وارد کنید"
              name="password"
              type="password"
            ></InputText>
            <InputText
              label="تکرار رمز عبور"
              name="confrimPassword"
              type="password"
            ></InputText>
            <Button type="submit" isBold>اعمال تغییرات</Button>
          </OutBox>
        </FormContainer>
      </div>
    </>
  );
}

export default ResetPage;
