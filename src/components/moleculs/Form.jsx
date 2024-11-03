import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Form = ({ input }) => {
  console.log("form");
  return (
    <form className="flex flex-col space-y-4 mt-8 mb-2  w-96 lg:max-w-7xl">
      <div className="mb-1 flex flex-wrap gap-y-4">
        {input.map((item, index) => (
          <div className="flex gap-x-4 " key={index}>
            <div className="w-32 mb-2 text-right pr-0 ">
              <label variant="small" color="blue-gray" className="mb-2">
                {item.label}
              </label>
            </div>
            <div className="">
              <Input type={item.type} />
            </div>
          </div>
        ))}
        <Button text="Submit" />
      </div>
    </form>
  );
};

export default Form;
