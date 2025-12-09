import './index.css';
import MultiStepForm from './components/MultiStepForm';
import { MultiStepFormProvider } from './context/MultiStepFormContext';


const App = () => {
	return (
		<main>
			<MultiStepFormProvider>
				<MultiStepForm />
			</MultiStepFormProvider>
		</main>
	)
}

export default App