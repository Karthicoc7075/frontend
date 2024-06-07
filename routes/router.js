import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts';

export const IndexPage = lazy(() => import('../pages/dashboard/dashboard'));
export const ClassPage = lazy(() => import('../pages/class/ViewClass.js'));
export const CreateClassPage = lazy(() => import('../pages/class/createClass'));
export const ManageClassPage = lazy(() => import('../pages/class/manageClass'));
export const CreateClassSubjectPage = lazy(() => import('../pages/class/createClassSubject'));
export const UpdateClassPage = lazy(() => import('../pages/class/updateClass'))
export const SubjectPage = lazy(() => import('../pages/subject/subject'))
export const CreateSubjectPage = lazy(() => import('../pages/subject/createSubject'))
export const UpdateSubjectPage = lazy(() => import('../pages/subject/updateSubject'))
export const MaterialPage = lazy(() => import('../pages/material/material'))
export const CreateMaterialPage = lazy(() => import('../pages/material/createMaterial'))
export const UpdateMaterialPage = lazy(() => import('../pages/material/updateMaterial'))
export const MediumPage = lazy(() => import('../pages/medium/medium'))
export const CreateMediumPage = lazy(() => import('../pages/medium/createMedium'))
export const UpdateMediumPage = lazy(() => import('../pages/medium/updateMedium'))
export const CategoryPage = lazy(() => import('../pages/category/category.js'))
export const CreateCategoryPage = lazy(() => import('../pages/category/createCategory'))
export const UpdateCategoryPage = lazy(() => import('../pages/category/updateCategory'))
export const LanguagePage = lazy(() => import('../pages/language/language'))
export const CreateLanguagePage = lazy(() => import('../pages/language/createLanguage'))
export const UpdateLanguagePage = lazy(() => import('../pages/language/updateLanguage'))
export const NewsPage = lazy(() => import('../pages/news/news'))
export const CreateNewsPage = lazy(() => import('../pages/news/createNews'))
export const UpdateNewsPage = lazy(() => import('../pages/news/updateNews'))
export const SliderPage = lazy(() => import('../pages/slider/slider'))
export const CreateSliderPage = lazy(() => import('../pages/slider/createSlider'))
export const UpdateSliderPage = lazy(() => import('../pages/slider/updateSlider'))
export const ReviewPage = lazy(() => import('../pages/review/review'))
export const SupportPage = lazy(() => import('../pages/support/support'))
export const ReportPage = lazy(() => import('../pages/report/report'))
export const Page404 = lazy(() => import('../pages/page-not-found/index'))
export const NotificationPage = lazy(() => import('../pages/notification/notification'))
export const CreateNotificationPage = lazy(() => import('../pages/notification/createNotification'))
export const VersionPage = lazy(() => import('../pages/version/version.js'))
export const CreateVersionPage = lazy(() => import('../pages/version/createVersion.js'))
export const SettingPage = lazy(() => import('../pages/setting/setting.js'))
// export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('../pages/login/login'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
// export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'class', element: <ClassPage /> },
        { path: 'class/create', element: <CreateClassPage /> },
        { path: 'class/update', element: <UpdateClassPage /> },
        { path: 'class/manage-class', element: <ManageClassPage /> },
        { path: 'class/subject/create', element: <CreateClassSubjectPage /> },
        { path: 'subject', element: <SubjectPage /> },
        { path: 'subject/create', element: <CreateSubjectPage /> },
        { path: 'subject/update', element: <UpdateSubjectPage /> },
        { path: 'material', element: <MaterialPage /> },
        { path: 'material/create', element: <CreateMaterialPage /> },
        { path: 'material/update', element: <UpdateMaterialPage /> },
        { path: 'medium', element: <MediumPage /> },
        { path: 'medium/create', element: <CreateMediumPage /> },
        { path: 'medium/update', element: <UpdateMediumPage /> },
        { path: 'category', element: <CategoryPage /> },
        { path: 'category/create', element: <CreateCategoryPage /> },
        { path: 'category/update', element: <UpdateCategoryPage /> },
        { path: 'language', element: <LanguagePage /> },
        { path: 'language/create', element: <CreateLanguagePage /> },
        { path: 'language/update', element: <UpdateLanguagePage /> },
        { path: 'news', element: <NewsPage /> },
        { path: 'news/create', element: <CreateNewsPage /> },
        { path: 'news/update', element: <UpdateNewsPage /> },
        { path: 'slider', element: <SliderPage /> },
        { path: 'slider/create', element: <CreateSliderPage/>},
        { path: 'slider/update', element: <UpdateSliderPage/>},
        { path: 'review', element: <ReviewPage /> },
        { path: 'support', element: <SupportPage /> },
        { path: 'report', element: <ReportPage /> },
        { path: 'notification', element: <NotificationPage /> },
        { path: 'notification/create', element: <CreateNotificationPage /> },
        { path: 'version', element: <VersionPage /> },
        { path: 'version/create', element: <CreateVersionPage /> },
        { path: 'setting', element: <SettingPage /> },


        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
