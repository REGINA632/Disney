import { Container, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const VEM = () => {
  return (
    <>
      <Container id="kardio">
        <Typography m="20px 0">
          <Typography m="30px 0" align="center">
            <Typography variant="h4" m="30px 0" align="center">
              ВЕЛОЭРГОМЕТРИЯ (ВЭМ)
            </Typography>
            <img
              width="35%"
              style={{ borderRadius: "50px" }}
              src="https://www.kardiocentr.kg/wp-content/uploads/2022/04/04-%D0%92%D0%B5%D0%BB%D0%BE%D1%8D%D1%80%D0%B3%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%8F-%D0%92%D0%AD%D0%9C.jpg"
              alt=""
            />
          </Typography>

          <Typography>
            Вэлоэргометрия (ВЭМ) — электрокардиографический метод диагностики,
            один из вариантов стресс-ЭКГ с физической нагрузкой, выполняемый на
            велоэргометре. Суть метода — пациенту дается ступенчато возрастающая
            нагрузка на велоэргометре (пациент крутит педали велосипеда), при
            этом идет регистрация показателей сердечно-сосудистой системы (ЭКГ,
            АД). <br /> Продолжительность исследования: 15-30 мин. <br /> Выдача
            результатов: в день исследования (через 10-15 минут после
            исследования).
            <br /> Показания к выполнению ВЭМ-пробы:
            <br /> — диагностика стенозирующего поражения коронарных артерий у
            взрослых больных с возможной ишемической болезнью сердца (ИБС) по
            клиническим данным. <br />
            Чувствительность пробы (т.е. ее достоверность) составляет 87%.
          </Typography>
          <Typography>
            Основные абсолютные противопоказания к проведению ВЭМ-пробы:
          </Typography>
          <ul id="ul">
            <li>• острый инфаркт миокарда (в течение двух дней); </li>
            <li>• нестабильная стенокардия; </li>
            <li>
              • наличие неконтролируемых нарушений ритма, вызывающих
              гемодинамические нарушения;{" "}
            </li>
            <li>• симптоматичный тяжелый аортальный стеноз; </li>
            <li>
              • плохо контролируемая симптоматичная сердечная недостаточность;{" "}
            </li>
            <li>• острая эмболия легочной артерии/инфаркт легких;</li>
            <li>
              • острые миокардиты или перикардиты; острое расслоение аорты.
            </li>
          </ul>
          <Typography>Преимущества ЭхоКГ:</Typography>
          <ul id="ul">
            <li>• не используется рентгеновское излучение; </li>
            <li>• абсолютно безвредна и безболезненна; </li>
            <li>• сократимость; </li>
            <li>• высокая четкость получаемого изображения; </li>
          </ul>
          <Typography>
            Относительные противопоказания к проведению ВЭМ-пробы:
          </Typography>
          <ul id="ul">
            <li>
              • тяжелая артериальная гипертензия (систолическое АД выше 200 мм
              рт. ст., диастолическое – выше 110 мм рт. ст.);
            </li>
            <li>• выраженные тахиаритмии или брадиаритмии;</li>
            <li>
              • гипертрофическая кардиомиопатия (ГКМП) или другие формы
              обструкции выходного тракта;
            </li>
            <li>
              • психоэмоциональная или физическая неполноценность,
              обусловливающая невозможность адекватного выполнения
              соответствующей нагрузки;{" "}
            </li>
            <li>• АВ-блокады высокой степени. </li>
          </ul>
          <Typography>Подготовка к ВЭМ-пробе:</Typography>
          <ul id="ul">
            <li>
              • При проведении теста на скрытую коронарную недостаточность
              необходимо до исследования отменить прием определенных
              лекарственных препаратов: β-блокаторы и антагонисты кальция группы
              верапамила – за 3 дня, нитраты – за 1 день;
            </li>
            <li>
              • При проведении теста на толерантность к физическим нагрузкам
              (при установленной ИБС, после шунтирования и стентирования
              коронарных артерий, постинфарктный кардиосклероз) отмена
              вышеперечисленных препаратов решается лечащим врачом и/или
              кардиологом;
            </li>
            <li>
              • Соблюдать рекомендации направившего врача по приему
              лекарственных средств;
            </li>
            <li>• Исследование проводится через 2-3 ч после приема пищи!</li>
            <li>• В день исследования не курить; </li>
            <li>
              • В день исследования желательно исключить мочегонные, крепкий
              кофе и чай;{" "}
            </li>
            <li>
              • В день исследования должны отсутствовать интенсивные физические
              нагрузки;{" "}
            </li>
            <li>
              • Проведение пробы рекомендуется в удобной для физических
              упражнений одежде и обуви; с собой иметь полотенце;{" "}
            </li>
            <li>• С собой иметь список принимаемых препаратов; </li>
            <li>• Принять гигиенический душ перед исследованием. </li>
          </ul>
        </Typography>
      </Container>
    </>
  );
};

export default VEM;
