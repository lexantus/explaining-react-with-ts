import { useRef, ElementRef, forwardRef, ComponentProps } from "react";

const AnotherComponent = forwardRef((props) => {
  return <div {...props}>Another component</div>;
});

AnotherComponent.displayName = "AnotherComponent";

type InputProps = ComponentProps<"input">;
type InputRef = ElementRef<"input">;

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactElement
) => (props: P & React.RefAttributes<T>) => React.ReactElement;

const fixedForwardRef = forwardRef as FixedForwardRef;

const InputWrapper = fixedForwardRef<InputRef, InputProps>((props, ref) => {
  return <input {...props} ref={ref} />;
});

InputWrapper.displayName = "InputWrapper";

type AudioRef = ElementRef<"audio">;

const Component = () => {
  const audioRef = useRef<AudioRef>(null);
  const anotherComponentRef = useRef<typeof AnotherComponent>(null);

  return (
    <>
      <audio ref={audioRef}>Hello</audio>;
      <AnotherComponent ref={anotherComponentRef} />
      <InputWrapper type={1} value="hello" name="hello" />
    </>
  );
};

export default Component;
