import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { classNames } from 'src/utils/utils';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<ArrowButton onClick={()=>setIsOpen(true)} isOpen={isOpen}/>
			<aside className={classNames(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
