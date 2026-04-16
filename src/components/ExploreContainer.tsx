import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
     <>
       <IonCard>
      <IonCardHeader>
        <IonCardTitle>Jambert App</IonCardTitle>
        <IonCardSubtitle>James Berth Montimar apps</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Hi welcome to my Application.</IonCardContent>

      <IonButton fill="clear">Welcome po!</IonButton>
      
    </IonCard>
    </>
  );
};

export default ExploreContainer;
