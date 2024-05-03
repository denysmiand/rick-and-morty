type CheckboxProps = {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ id, name, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex flex-wrap-0 items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ps-2 text-[16px] select-none	">
        {name}
      </label>
    </div>
  );
};
