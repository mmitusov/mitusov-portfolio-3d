3D Web Developer Portfolio in React JS using Three.js

Сперва почистим проэкт. Удалим вся лишенее из стартовой страницы 'page.tsx'. Далее разделим все файлы, что сваленны в одну кучу в  папке 'app', по разным папкам, каждая из которых будет отвечать за свой функционал. Глобальные стили переместим в созданую нами папку 'styles'. А favicon.ico переместим в глобальную папку 'public'. Мы можем хранить favicon.ico как папке '/public', так и в корне папки '/app'. И так, и так - Next сможет считывать нашу картинку. И создадим папку 'components', где будем хранить все компоненты.

Напомню, что сама папка 'app' будет отвечать за роутинт (хранить все основные страницы нашего приложения), а также за лейаут, который будет отображаться на каждой из этих страниц. Все лишниее для чистоты проэекта из этой папки лучше убрать. Если мы хотим создать новый раут, то нам просто нужно создать папку внутри 'app' и дать ей имя. Ее имя и будет названием раута. А внутри созданой папки создать файл 'page.tsx'.

