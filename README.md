Библиотеки:  
npm i @react-three/fiber  
npm i @react-three/drei  
npm i maath  
npm i react-tilt  
npm i react-vertical-timeline-component  
npm i @emailjs/browser  
npm i framer-motion  
npm i sass

Сперва почистим проэкт. Удалим вся лишенее из стартовой страницы 'page.tsx'. Далее разделим все файлы, что были сваленны в одну кучу в папке 'app', по разным папкам, каждая из которых будет отвечать за свой функционал. Глобальные стили переместим в созданую нами папку 'styles'. А favicon.ico переместим в глобальную папку 'public'. Мы можем хранить favicon.ico как папке '/public', так и в корне папки '/app'. И так, и так - Next сможет считывать нашу картинку. И создадим папку 'components', где будем хранить все компоненты.

Напомню, что сама папка 'app' будет отвечать за роутинт (хранить все основные страницы нашего приложения), а также за лейаут, который будет отображаться на каждой из этих страниц. Все лишниее для чистоты проэекта из этой папки лучше убрать. Если мы хотим создать новый раут, то нам просто нужно создать папку внутри 'app' и дать ей имя. Ее имя и будет названием раута. А внутри созданой папки создать файл 'page.tsx'.

После чего мы начнем устанавливать нужные нам библиотеки. У нас не будет уставревших библиотек. Но если бы такая и имелась бы, то мы устанавливали ее бы с флагом --legacy-peer-deps: "npm install --legacy-peer-deps <lib_name>".

Приступим к верстке. Начнем с того, что мы создадим скелет нашего приложения.