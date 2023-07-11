type ContainerProps = { children: React.ReactNode };

const Container = ({ children }: ContainerProps) => (
	<div className='mx-auto max-w-7xl'>{children}</div>
);

export default Container;
