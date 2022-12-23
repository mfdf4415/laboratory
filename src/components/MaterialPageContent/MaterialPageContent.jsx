import img from "../../img/packing_#.jpg";
import style from "./MaterialPageContent.module.css";
import { getListOfResevation } from "../../Services/getListOfReservation";
import { useEffect } from "react";

const MaterialPageContent = () => {
  return (
    <section className={style.homeSection}>
      <div className={style.experimentsListHeader}>
        <h1>Materials API</h1>
      </div>
      <article>
        <p>
        Die Materials Project API ermöglicht jedem, strukturiert und direkt auf aktuelle Informationen aus der Materials Project-Datenbank zuzugreifen.

Dies ermöglicht Analysen, die Entwicklung automatisierter Tools, maschinelles Lernen, das Herunterladen persönlicher Kopien der Materials Project-Datenbank und mehr in großem Umfang.
Die API wird in der Hoffnung angeboten , die Daten von Materials Project für Sie nützlicher zu machen . Wir möchten, dass Sie unsere Daten nutzen! Daher wird die API kostenlos angeboten und wir unterstützen mehrere Tools, um Ihnen den Einstieg zu erleichtern.

        Um eine Anfrage an die Materials Project API zu stellen, müssen Sie einen API-Schlüssel verwenden. Ihr API-Schlüssel wird bei der Registrierung auf der Materials Project-Website automatisch für Sie generiert und mit der E-Mail-Adresse synchronisiert, mit der Sie sich registriert haben.

Denken Sie daran, Ihren API-Schlüssel sicher aufzubewahren und ihn nicht an Personen weiterzugeben, denen Sie nicht vertrauen.

Wenn Sie angemeldet sind, können Sie jederzeit von dieser Seite oder von Ihrem Dashboard aus auf Ihren API-Schlüssel zugreifen .<br/>
          Über folgenden Link können Sie auf die Materials API zugreifen: 
          <a href="https://materialsproject.org/">Besuche Materials API</a>
        </p>
      </article>
    </section>
  );
};

export default MaterialPageContent;
