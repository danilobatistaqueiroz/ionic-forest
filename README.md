[![Demo](https://github.com/danilobatistaqueiroz/ionic-forest/blob/main/src/assets/tutorial/settings1.png)](https://user-images.githubusercontent.com/32627919/254446540-b5e21acd-1780-46bc-89ae-96dadf57c60d.mp4)

Dimensoes ideais para o teste: Pixel 3 - 393 x 786  
Esse projeto não está responsivo, o botão Plantar, a árvore central, e os botões no topo são uma imagem fixa.  

Seria necessário recortar a árvore, o ideal ela ser uma imagem vetorial, e centralizá-la na tela, especificando um tamanho em percentual com max e min width e height  
Usar um position:fixed para o botão Plantar com um bottom talvez de uns 100px e centralizado horizontalmente.  
Os botões no topo dentro de uma div position:fixed com 100% de width usando flexbox com flex-direction:row e justify-content:space-between  e top de uns 100px


#### Para personalizar o ion-modal:  

as chamadas das modais estão no arquivo settings.component.ts

foi criado o arquivo terms/animation/enter.ts

nesse arquivo há as novas animações da modal, para que ela caia ao aparecer

altere o arquivo `global.scss`

https://www.joshmorony.com/create-a-custom-modal-page-transition-animation-in-ionic/  
https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/modal/animations/md.enter.ts  


#### Para personalizar o ng-bootstrap modal:

para que a modal não tome 100% da lateral da tela e caia ao invés de subir, é necessário alterar o width, margin, e alterar o transform.  
alterei também a distância que a modal desce, para top 30% como o ponto final, e iniciando de translate(0, -260px)

 **node_modules/bootstrap**  

**_modal.scss**  
`  .modal-dialog {
    width: 84%;
    min-width:290px !important;
    max-width:320px !important;
    margin: auto;
    top:30%;
  }
`

**_variables.scss**  
`  $modal-fade-transform:              translate(0, -260px) !default;
  $modal-transition:                  transform .4s ease-out !default;
`
