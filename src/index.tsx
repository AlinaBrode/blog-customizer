import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Select } from './components/select';
import { RadioGroup } from './components/radio-group';
import { Separator } from './components/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [fontSelected, setFontSelected] = useState(defaultArticleState.fontFamilyOption);
	const [fontSizeSelected, setFontSizeSelected] = useState(defaultArticleState.fontSizeOption);
	const [fontColorSelected, setFontColorSelected] = useState(defaultArticleState.fontColor);
	const [bgColorSelected, setBgColorSelected] = useState(defaultArticleState.backgroundColor);
	const [widthSelected, setWidthSelected] = useState(defaultArticleState.contentWidth);


	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontSelected.value,
					'--font-size': fontSizeSelected.value,
					'--font-color': fontColorSelected.value,
					'--container-width': widthSelected.value,
					'--bg-color': bgColorSelected.value,
				} as CSSProperties
			}>
			<ArticleParamsForm>
				<Select
						selected={fontSelected}
						onChange={setFontSelected}
						options={fontFamilyOptions}
						title='шрифт'
				></Select>

				<RadioGroup
					selected={fontSizeSelected}
					name='что-нить'
					onChange={setFontSizeSelected}
					options={fontSizeOptions}
					title='размер шрифта'
				></RadioGroup>

				<Select
					selected={fontColorSelected}
					onChange={setFontColorSelected}
					options={fontColors}
					title='цвет шрифта'
				></Select>

				<Separator />

				<Select
					selected={bgColorSelected}
					onChange={setBgColorSelected}
					options={backgroundColors}
					title='цвет фона'
				></Select>

				<Select
					selected={widthSelected}
					onChange={setWidthSelected}
					options={contentWidthArr}
					title='ширина контента'
				></Select>

			</ArticleParamsForm>
			<Article/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
