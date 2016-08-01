## nodejs-arduino

Experimento simples desenvolvido em Javascript com NodeJS e as bibliotecas <a href="http://johnny-five.io/">Johnny-Five</a> e <a href="https://github.com/ttezel/twit">Twit</a> e utilizando um sensor HCSR04 conectado em uma placa <a href="https://www.arduino.cc/">Arduíno</a>

O objetivo é medir a distância de objetos que passam pelo sensor e postar um tweet em uma conta previamente configurada pelo usuário.


__Instalação:__

```bash
npm install johnny-five
npm install twit
```

__Observação:__
O <a href="https://gist.githubusercontent.com/rwaldron/0519fcd5c48bfe43b827/raw/f17fb09b92ed04722953823d9416649ff380c35b/PingFirmata.ino">pingfirmata</a> deve ser previamente carregado no Arduíno.

Conexão do sensor na placa Arduíno:
<img src="http://johnny-five.io/img/breadboard/proximity-hcsr04.png" />
