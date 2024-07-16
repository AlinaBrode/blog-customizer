import { ArrowButton } from 'components/arrow-button';

import styles from './ArticleParamsForm.module.scss';
import { ReactNode, useState } from 'react';
import { classNames } from 'src/utils/utils';
import { Button } from '../button';
import { Select } from '../select';
import { OptionType, backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

interface PropsArticleParamsForm {
	children: ReactNode;
}

export const ArticleParamsForm = ({children} : PropsArticleParamsForm) => {
	const [isOpen, setIsOpen] = useState(false);


	return (
		<>
			<ArrowButton onClick={()=>setIsOpen(!isOpen)} isOpen={isOpen}/>
			<aside className={classNames(styles.container, isOpen && styles.container_open)}>
			<form className={styles.form}>
				{children}

			</form>
			</aside>
		</>
	);
};
