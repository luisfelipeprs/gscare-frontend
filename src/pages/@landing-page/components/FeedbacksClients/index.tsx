import './styles.css';

import workpc2 from '../../../../assets/workpc2.png'
import avatar from '../../../../../public/avatar.png'

export const FeedbacksClients = () => {
  return (

    <section className="features" id="feadback-section">

      <div className="container">
        <section id="testimonials">
          <img src={workpc2} id="testimonial_chef" alt="" />

          <div id="testimonials_content">
            <h2 className="section-title">
              Depoimentos
            </h2>
            <h3 className="section-subtitle">
              O que os clientes falam sobre nós
            </h3>

            <div id="feedbacks">
              <div className="feedback">
                <img src={avatar} className="feedback-avatar" alt="" />

                <div className="feedback-content">
                  <p>
                    Fulana de Tal
                    <span>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                    </span>
                  </p>
                  <p>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat voluptatibus cumque dolor ea est quae alias necessitatibus"
                  </p>
                </div>
              </div>

              <div className="feedback">
                <img src={avatar} className="feedback-avatar" alt="" />

                <div className="feedback-content">
                  <p>
                    Fulana de Tal
                    <span>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                      <i className="fa-solid fa-star"> ⭐</i>
                    </span>
                  </p>
                  <p>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat voluptatibus cumque dolor ea est quae alias necessitatibus"
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-default">
              Ver mais avaliações
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}
