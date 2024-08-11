import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { DateTimePicker } from "../ui/datatime-picker";

export interface DateTimeControl<T extends FieldValues>
  extends React.HTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string | React.ReactNode;
  disabled?: boolean;
  defaultValue?: PathValue<T, Path<T>>;
}

const DateTimeControl = <T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  onChange,
  onBlur,
  disabled,
  defaultValue,
  ...rest
}: DateTimeControl<T>) => {
  const { control, setValue, getValues, resetField } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <DateTimePicker
                hourCycle={12}
                {...field}
                {...rest}
                value={getValues(name)}
                onChange={(date) => {
                  if (date) {
                    resetField(name);
                    setValue(name, date as any);
                  }
                }}
                placeholder={placeholder}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default DateTimeControl;
