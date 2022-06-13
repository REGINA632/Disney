import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Otdelenie() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Typography align="center" variant="h4" m="20px 0">
        Отделение
      </Typography>

      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label="Консультативно-диагностическое отделение"
            {...a11yProps(0)}
          />
          <Tab label="Отделение кардиологии" {...a11yProps(1)} />
          <Tab
            label="Отделение ургентной кардиологии и реанимации"
            {...a11yProps(2)}
          />
          <Tab label="Отделение кардиохирургии" {...a11yProps(3)} />
          <Tab
            label="Отделение клинической лабораторной диагностики"
            {...a11yProps(4)}
          />
        </Tabs>
        <Container>
          <TabPanel value={value} index={0}>
            <Typography variant="h4">
              Консультативно-диагностическое отделение
            </Typography>
            <Typography variant="body1">
              В консультативно-диагностических отделениях работают доктора и
              кандидаты медицинских наук, врачи высшей категории, имеющие
              большой опыт лечебной работы и владеющие современными методиками
              диагностики и лечения. Организована система непрерывного обучения
              и профессионального роста врачебного и среднего медицинского
              персонала клиники. Особое внимание КДО уделяется ранней
              диагностике и профилактике заболеваний. Наши врачи работают
              совместно с другими специалистами, такими как, эндокринолог и
              невролог, что обеспечивает своевременную диагностику заболеваний и
              позволяет подобрать эффективное лечение в тяжелых случаях.
              Ежедневно прием ведут кардиолог, невролог, эндокринолог,
              специалисты функциональной диагностики, такие как УЗИ, УЗДГ, ЭХО,
              суточного Холтер ЭКГ-мониторирования. Консультации специалистов
              проводятся по предварительной записи. В отдельных случаях
              консультации проводятся вне записи, учитывая состояние больного.
              Также, для удобства посетителей проводится прием специалистов по
              принципу «живой очереди». Основными задачами КДО являются: <br />{" "}
              - оказание квалифицированной консультативно-диагностической
              помощи; <br /> - проведение комплексного обследования больных для
              дальнейшего стационарного лечения; <br /> - назначение лечения,
              проведение медицинских манипуляций в условиях дневного стационара
              (если это требуется); <br /> - отбор пациентов на плановую
              госпитализацию для оказания стационарной медицинской помощи.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h4">Отделение кардиологии</Typography>
            <Typography variant="body1">
              С каждым годом в мире неуклонно растет число кардиологических
              больных, которым требуется проведение ежегодного обследования и
              лечения у специалиста. Комплексная терапия, различные методы
              диагностики, динамическое наблюдение врача значительно повышают
              качество жизни пациентов, страдающих коронарной болезнью сердца,
              различными формами стенокардии, сердечной недостаточностью,
              нарушениями сердечного ритма, проводимости и другими
              заболеваниями.
              <br /> В нашем отделении «Кардиологии» вы можете получить
              высококвалифицированную медицинскую помощь в комфортабельных
              условиях. В стационаре 16 палат (35 койко-мест), среди которых
              есть одно-, двух- и трехместные палаты, оснащенные всем
              необходимым для вашего удобного пребывания в стационаре и
              скорейшего выздоровления.
              <br /> Наши врачи – кардиологи располагают большим опытом работы,
              в том числе в отделениях кардиохирургии, кардиореанимации,
              кардиологического терапевтического стационара. Мы подходим к
              решению проблем сердечно- сосудистой системы с учетом
              индивидуальных особенностей пациентов: пола, возраста, специфики
              течения заболевания, сопутствующих патологий. Также проводится
              весь спектр кардиологических обследований, таких как ЭКГ, ЭХОКГ,
              Суточное ЭКГ – мониторирование, суточное АД- мониторирование,
              коронароангиография, все виды УЗИ внутренних органов, УЗДГ
              сосудов. Выполняется комплексное исследование биохимических и
              общеклинических анализов. Все кардиологические методы обследования
              выполняются в день обращения. <br /> Подбор медикаментозной
              терапии производится с учетом сопутствующей патологии и
              индивидуальной оценки риска побочных действий, осуществляется
              коррекция схемы лечения в зависимости от динамики в состоянии
              пациента, разрабатываем индивидуальную систему физических
              нагрузок, диету. <br /> Также в стационаре проводится реабилитация
              пациентов после аортокоронарного шунтирования и стентирования,
              после радиочастотной абляции (РЧА), после протезирования клапанов
              сердца, имплантации электрокардиостимулятора. Проводим
              терапевтическое лечение пациентов со всеми видами коронарной
              болезни сердца, с гипертонической болезнью, с аритмиями,
              нарушениями проводимости (блокадами), пороками сердца,
              миокардитами, кардиомиопатиями, метаболическими синдромами. <br />{" "}
              Диагностика и стационарное лечение кардиологических пациентов:{" "}
              <br /> 1. Артериальная гипертония <br /> 2. Ишемическая болезнь
              сердца
              <br /> 3. Аритмии сердца <br /> 4. Сердечная недостаточность{" "}
              <br /> 5. Врожденные пороки сердца <br /> 6. Приобретенные пороки
              сердца <br /> 7. Ревматические поражения сердца <br /> 8.
              Инфекционные и воспалительные заболевания сердца <br /> 9. Синдром
              кардиалгии при психосоматических нарушениях <br /> 10. Последствия
              перенесенного инсульта на фоне ГБ <br /> 11. Предоперационная
              подготовка больных к инвазивным диагностическим,
              кардиохирургическим процедурам и операциям <br /> 12. Дислипидемии{" "}
              <br /> 13. Общее медицинское (многопрофильное) обследование в
              условиях стационара
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h4">
              Отделение ургентной кардиологии и реанимации
            </Typography>
            <Typography variant="body1">
              Отделение ургентной кардиологии и реанимации и интенсивной терапии
              предназначено для круглосуточной экстренной медицинской помощи.
              Отделение рассчитано на 22 коек. Основной задачей отделения
              является диагностика и лечение жизнеугрожающих заболеваний
              сердечно-сосудистой системы – неотложными кардиологоческими
              состояниями. Пациенты с тяжелыми формами заболевания поступают в
              отделение реанимации минуя приемное отделение. Благодаря этому,
              помощь оказывается в кратчайшие сроки. <br /> В отделении
              накоплены богатый опыт и имеется необходимое оборудование для
              экстренной диагностики и адекватного лечения пациентов с инфарктом
              миокарда, нестабильной стенокардией, нарушениями ритма и
              проводимости сердца, острой сердечной недостаточностью, включая
              отек легких и кардиогенный шок, и таким пациентам возможно
              проведение интервенционного вмешательства в ранние сроки
              заболевания. <br /> Планировка реанимационных палат обеспечивает
              возможность постоянного ухода и наблюдения за больными – для этого
              пост медсестры размещен непосредственно в палате. Отделение
              оборудовано лампами для дезинфекции всех помещений. К каждой
              кровати обеспечен свободный доступ со всех сторон, у каждой
              кровати есть подводка системы централизованной подачи кислорода,
              мониторы наблюдения с выводом информации о пациентах на
              центральный монитор. <br />{" "}
              <span style={{ fontSize: "25px" }}>
                {" "}
                Отделение ургентной кардиологии и реанимации кроме этого
                располагает оборудованием:
              </span>{" "}
              <br /> 1.Современные прикроватные мониторы позволяют круглосуточно
              отслеживать состояние гемодинамики пациентов, контролировать
              основные параметры, характеризующие жизненно важные функции
              организма (ЭКГ, АД, ЧД, температура, сатурация, пульсоксиметрия) и
              снабженные звуковой тревогой.
              <br /> 2.Функциональные кровати с элктроприводом способные предать
              любое положение тела и возможностью самостоятельного управления
              пациентом.
              <br /> 3.Оборудование для респираторной поддержки и искусственной
              вентиляции легких с высокой степенью защиты от сбоев. <br /> 4.
              Аппараты для регистрации ЭКГ, проведения электроимпульсной терапии
              (ЭИТ), искусственной вентиляции лёгких (как инвазивной так и не
              инвазивной – СРАР-терапия). <br /> 5.Дефибрилляторы, работающие в
              режиме синхронизации с комплексом QRS электрокардиограммы. <br />{" "}
              6. Централизованная подача кислорода через увлажнители с
              дозатором. <br /> 7.Приборы для временной электрической
              кардиостимуляции. <br /> 8.Высокоточные инфузоматы для длительного
              внутривенного дозированного введения лекарственных препаратов. Это
              шприцевые дозаторы, имеющие программное обеспечение и
              автоматическую защиту от тромбирования сосудов. <br />{" "}
              9.Диагностические ультразвуковые установки. <br /> 10.Современные
              лекарственные препараты. При необходимости специалисты отделения
              могут провести имлантацию временного кардиостимулятора,
              осуществить анестезиологическое пособие при проведении
              рентгенэндоваскулярных вмешательствах, кардиоверсии. Все врачи
              отделения имеют высшую и первую квалификационную категорию по
              специальностям анестезиология-реаниматология и кардиология. Все
              сотрудники отделения постоянно повышают свой профессиональный
              уровень, посещают клинические конференции.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography variant="h4">
              Отделение функциональной диагностики
            </Typography>
            <Typography variant="body1">
              Наш «Кардио Центр» и осуществляет широкий спектр современных
              высокоинформативных диагностических методов исследования у больных
              с сердечно-сосудистой патологией. В отделении работают
              высокопрофессиональные специалисты, среди которых кандидаты
              медицинских наук, врачи высшей и первой квалификационной
              категорий.
              <br /> ИССЛЕДОВАНИЯ, ВЫПОЛНЯЕМЫЕ В ОТДЕЛЕНИИ: <br />{" "}
              электрокардиография,
              <br /> нагрузочные тесты: велоэргометрия, тредмил, <br />{" "}
              эргоспирометрия – нагрузочная проба с газовым анализом, <br />{" "}
              неинвазивная оценка центрального давления и скорости пульсовой
              волны, <br />
              электрофизиологические исследования, <br />{" "}
              электрокардиотопография-60, <br />
              суточное мониторирование ЭКГ и АД, <br /> исследование функции
              внешнего дыхания, <br /> информационные пробы, <br /> диагностика
              апное сна, <br /> программация электрокардиостимуляторов.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography variant="h4">
              Отделение клинической лабораторной диагностики
            </Typography>
            <Typography variant="body1">
              Отделение клинической лабораторной диагностики клиники
              «Кардиоцентр” работает круглосуточно, выполняет все виды анализов
              и экспресс анализы. Отделение клинической лабораторной диагностики
              выполняет широкий спектр клинико-лабораторных тестов как для
              пациентов стационара, так и амбулаторных пациентов. Современное
              оснащение от ведущих мировых производителей позволяет на высоком
              уровне аналитического качества проводить гематологические,
              клинико-биохимические, коагулологические, иммунологические
              анализы.
              <br /> Лаборатория “Кардиоцентра” оснащена современными
              лабораторными оборудованиями: <br /> - Гематологический анализатор
              “Mindray-2800”(Китай);
              <br /> - Биохимический анализатор “BioChem FC-200”(США); <br /> -
              Коагулометр “СYANCoag”(Белгия);
              <br /> - Анализатор “Getein 1100” (Китай);
              <br /> - Полуавтомат “ StarFax 4500” (США);
              <br /> - Анализатор мочи URIT - 50 Vet (Китай)
              <br /> В отделении трудятся высококвалифицированные специалисты в
              области клинической лабораторной диагностики, которые имеет стаж
              работы более 30 лет в сфере медицины. В лаборатории работают 7
              сотрудников, из них:
              <br /> - врачи лаборанты первой категории и отличники
              здровоохранения КР – 2; <br />- фельдшер –лаборанты первой
              категории – 2;
              <br />- фельдшер-лаборанты – 3 <br />
              Врачи и лаборанты являются членами Ассоциации специалистов
              клинической лабораторной диагностики (АСКЛД).
              <br /> В лаборатории проводится ежедневный внутри лабораторный
              контроль качества, со стандартными контрольными материалами,
              предназначенными для каждого вида исследования.
            </Typography>
          </TabPanel>
        </Container>
      </Container>
    </Container>
  );
}
