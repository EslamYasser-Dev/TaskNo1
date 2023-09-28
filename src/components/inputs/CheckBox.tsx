import { useState } from "react";

type Props = {
  checked: boolean;
  label: string;
};

function Checkbox({ checked, label }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        color="#087b2f"
        style={{ borderColor: isChecked ? "#087b2f" : "gray" }}
      />
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;