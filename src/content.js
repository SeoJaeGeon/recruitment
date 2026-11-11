// ============================================================
//  페이지 전체 내용은 이 파일 하나만 고치면 됩니다.
//  - site  : 언어와 상관없는 공통 설정 (이미지, 색, 링크)
//  - text  : 언어별 문구. ko / en / es 구조를 똑같이 맞춰주세요.
//  - 이미지는 public/images/ 폴더에 넣고 파일명만 적으세요. (예: 'hero.jpg')
//    비워두면('') 기본 배경색으로 표시됩니다.
//  - 배열 항목을 추가/삭제하면 화면에도 그대로 늘어나고 줄어듭니다.
//  - 언어를 추가하려면 languages 에 한 줄, text 에 같은 구조 한 덩어리를 추가하세요.
// ============================================================

export const site = {
  defaultLang: 'ko', // 브라우저 언어가 목록에 없을 때 쓰는 언어
  languages: { ko: '한국어', en: 'English', es: 'Español' }, // 언어 버튼에 보이는 이름
  logo: '', // 'logo.png' 처럼 넣으면 글자 대신 로고 이미지 표시
  logoText: 'RECRUIT',
  themeColor: '#4f46e5', // 버튼·강조색
  applyUrl: 'https://forms.gle/', // 지원하기 버튼 링크 (구글폼 등)
  heroImage: 'hero.svg', // 메인 배경 이미지
  aboutImage: '', // 소개 옆에 들어갈 이미지
}

export const text = {
  // ---------------- 한국어 ----------------
  ko: {
    title: '함께할 멤버를 모집합니다',
    applyLabel: '지원하기',
    hero: {
      badge: '2026 상반기 모집',
      title: '우리와 함께\n성장할 사람을 찾습니다',
      subtitle: '한 줄 소개 문구를 여기에 적어주세요.',
    },
    about: {
      title: '우리는 이런 팀이에요',
      body: '팀/단체 소개 문단을 여기에 적어주세요. 무엇을 하는 곳인지, 어떤 사람들이 모여 있는지 간단히 소개합니다.',
    },
    benefits: {
      title: '함께하면 좋은 점',
      items: [
        { icon: '🚀', title: '혜택 1', desc: '혜택 설명을 적어주세요.' },
        { icon: '🤝', title: '혜택 2', desc: '혜택 설명을 적어주세요.' },
        { icon: '🎁', title: '혜택 3', desc: '혜택 설명을 적어주세요.' },
      ],
    },
    positions: {
      title: '모집 분야',
      items: [
        { name: '분야 A', count: '0명', desc: '하는 일, 자격 요건 등' },
        { name: '분야 B', count: '0명', desc: '하는 일, 자격 요건 등' },
      ],
    },
    schedule: {
      title: '진행 일정',
      items: [
        { step: '서류 접수', date: '00.00 ~ 00.00' },
        { step: '면접', date: '00.00' },
        { step: '최종 발표', date: '00.00' },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { q: '질문 1?', a: '답변 1' },
        { q: '질문 2?', a: '답변 2' },
      ],
    },
    footer: {
      contact: '문의: contact@example.com',
      copyright: '© 2026 RECRUIT',
    },
  },

  // ---------------- English ----------------
  en: {
    title: 'Join Our Team',
    applyLabel: 'Apply Now',
    hero: {
      badge: '2026 H1 Recruiting',
      title: 'Looking for people\nto grow with us',
      subtitle: 'Write a one-line introduction here.',
    },
    about: {
      title: 'Who We Are',
      body: 'Introduce your team or organization here — what you do and who you are.',
    },
    benefits: {
      title: 'Why Join Us',
      items: [
        { icon: '🚀', title: 'Benefit 1', desc: 'Describe the benefit.' },
        { icon: '🤝', title: 'Benefit 2', desc: 'Describe the benefit.' },
        { icon: '🎁', title: 'Benefit 3', desc: 'Describe the benefit.' },
      ],
    },
    positions: {
      title: 'Open Positions',
      items: [
        { name: 'Position A', count: '0 openings', desc: 'Role, requirements, etc.' },
        { name: 'Position B', count: '0 openings', desc: 'Role, requirements, etc.' },
      ],
    },
    schedule: {
      title: 'Timeline',
      items: [
        { step: 'Application', date: '00.00 ~ 00.00' },
        { step: 'Interview', date: '00.00' },
        { step: 'Final Results', date: '00.00' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'Question 1?', a: 'Answer 1' },
        { q: 'Question 2?', a: 'Answer 2' },
      ],
    },
    footer: {
      contact: 'Contact: contact@example.com',
      copyright: '© 2026 RECRUIT',
    },
  },

  // ---------------- Español ----------------
  es: {
    title: 'Únete a nuestro equipo',
    applyLabel: 'Postular',
    hero: {
      badge: 'Convocatoria 2026',
      title: 'Buscamos personas\npara crecer juntos',
      subtitle: 'Escribe aquí una breve presentación.',
    },
    about: {
      title: 'Quiénes somos',
      body: 'Presenta aquí tu equipo u organización: qué hacen y quiénes lo forman.',
    },
    benefits: {
      title: 'Por qué unirte',
      items: [
        { icon: '🚀', title: 'Beneficio 1', desc: 'Describe el beneficio.' },
        { icon: '🤝', title: 'Beneficio 2', desc: 'Describe el beneficio.' },
        { icon: '🎁', title: 'Beneficio 3', desc: 'Describe el beneficio.' },
      ],
    },
    positions: {
      title: 'Puestos disponibles',
      items: [
        { name: 'Puesto A', count: '0 vacantes', desc: 'Funciones, requisitos, etc.' },
        { name: 'Puesto B', count: '0 vacantes', desc: 'Funciones, requisitos, etc.' },
      ],
    },
    schedule: {
      title: 'Cronograma',
      items: [
        { step: 'Postulación', date: '00.00 ~ 00.00' },
        { step: 'Entrevista', date: '00.00' },
        { step: 'Resultados', date: '00.00' },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Pregunta 1?', a: 'Respuesta 1' },
        { q: '¿Pregunta 2?', a: 'Respuesta 2' },
      ],
    },
    footer: {
      contact: 'Contacto: contact@example.com',
      copyright: '© 2026 RECRUIT',
    },
  },
}
